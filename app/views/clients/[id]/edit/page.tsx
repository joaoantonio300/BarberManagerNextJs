import Layout from "@/components/Layout";
import Form from "@/components/clients/Form";
import { revalidatePath } from "next/cache";

export default async function Page({ params }: { params: { id: string } }) {

  const response = await fetch(`http://localhost:3000/api/clients/${params.id}`, {
    cache: "no-store",
  });
  
  const client = await response.json();

  async function handleSubmit(data: any) {
    const response = await fetch(`http://localhost:3000/api/clients/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Erro ao atualizar cliente");
    }

    console.log("Cliente atualizado:", result);
  }

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-100">Editar Apontamento</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Preencha os dados abaixo para agendar um serviço.
          </p>
        </div>
        <Form 
            initialData={client}
            onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
}