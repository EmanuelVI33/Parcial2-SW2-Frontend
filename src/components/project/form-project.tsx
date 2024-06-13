import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { CustomDialogContext } from "../ui/custom-dialog";
import { useFileUpload } from "@/hooks/use-file-upload";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { usePresenter } from "@/hooks/presenter/use-presenter";
import { useCreateProject } from "@/hooks/project/use-create-project";

const formSchema = z.object({
    name: z.string().min(3),
    description: z.string(),
    cover: z.string(),
    presenterId: z.string(),
  });

function FormProject() {
    const { presenters } = usePresenter();
    // const { createPresenter, isLoading } = useCreatePresenter();
    const { createProject, isLoading } = useCreateProject();
    const { handleTogle } = useContext(CustomDialogContext);
    const { fileInputRef, base64, fileExtension, handleFileChange } = useFileUpload();
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            cover: "",
            presenterId: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        console.log(values);
        const data = {...values, cover: {
          data: base64,
          extension: fileExtension,
        }}

        const response = createProject({variables: {
            inputProject: data 
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
              name="name"
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
              name="description"
              render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                        <Input placeholder="nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                    <FormItem className="mb-3">
                    <FormLabel>Portada</FormLabel>
                    <FormControl>
                        <Input 
                            type="file"   
                            placeholder="foto"
                            {...field} 
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="presenterId"
              render={({ field }) => (
                <FormItem className="mb-3">
                    <FormLabel>Presentador</FormLabel>
                    <FormControl>
                    <>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4 space-y-1"
                        >
                            <div className="w-full h-56 grid grid-cols-3 lg:grid-cols-4 overflow-y-auto">
                                {presenters && (presenters.map(presenter => (
                                    <FormItem className="flex items-center space-x-3 space-y-0" key={presenter.id}>
                                        <FormControl>
                                            <RadioGroupItem value={presenter.id+''} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            <div className="">
                                                <p className="text-md mb-1">{presenter.fullName}</p>
                                                <img className="h-20 w-20 object-cover" src={presenter.fotoUrl} alt={presenter.fullName} />
                                            </div>
                                        </FormLabel>
                                    </FormItem>
                                )))}  
                            </div>
                        </RadioGroup>
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

export default FormProject
