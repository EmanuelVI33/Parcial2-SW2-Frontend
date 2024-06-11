import CreateOrEditPresenter from "@/components/presenter/create-or-edit-presenter";
import TablePresenter from "@/components/presenter/table-presenter";

export default function PresenterPage() {
  return (
    <section className="w-11/12 m-auto">
        <div className="flex justify-between my-4">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                Presentadores
            </h1>
            <CreateOrEditPresenter />
        </div>

        <TablePresenter />
    </section>
  )
}
