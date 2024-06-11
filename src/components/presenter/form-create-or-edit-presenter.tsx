import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { Sex } from "@/interfaces/presenter";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useMutationPresenter } from "@/hooks/presenter/use-mutation-presenter";
import { CustomDialogContext } from "../ui/custom-dialog";
import { useFileUpload } from "@/hooks/use-file-upload";

const formSchema = z.object({
  fullName: z.string().min(3),
  photo: z.string(),
  sex: z.string(),
});

export function FormCreateOrEditPresenter() {
    const { createPresenter, isLoading } = useMutationPresenter();
    const { handleTogle } = useContext(CustomDialogContext);
    const { fileInputRef, base64, fileExtension, handleFileChange } = useFileUpload();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        photo: "",
        sex: 'MALE',
      },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        console.log(values);
        const data = {...values, photo: {
          data: base64,
          extension: fileExtension,
        }}

        const response = createPresenter({variables: {
            inputPresenter: data 
          }
        });
        
        console.log(response);
      } catch (error) {
        console.log(error); 
      }
    }

    return (
      <>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=""
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="mb-3">
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                      <>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={Sex.MALE+''} />
                            </FormControl>
                            <FormLabel className="font-normal">Masculino</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={Sex.FEMALE+''} />
                            </FormControl>
                            <FormLabel className="font-normal">Femenino</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Foto</FormLabel>
                  <FormControl>
                    <>
                        <Input 
                            type="file"   
                            placeholder="foto"
                            {...field} 
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between mt-5">
              <Button type="button" className="" onClick={() => handleTogle()}>Cancelar</Button>
              <Button type="submit" className="w-1/4" disabled={isLoading}>Crear</Button>
            </div>
          </form>
        </Form>
      </>);
}
