import FormProject from "@/components/project/form-project";
import TableProject from "@/components/project/table-project";
import CreateOrEdit from "@/components/ui/create-or-edit";

export default function ProjectPage() {
    return (
      <section className="w-11/12 m-auto">
          <div className="flex justify-between my-4">
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                  Proyectos
              </h1>
              <CreateOrEdit>
                <FormProject />
              </CreateOrEdit>
          </div>
  
          <TableProject />
      </section>
    )
  }