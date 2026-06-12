import Layout from "@/components/Layout";
import Form from "@/components/clients/Form";
import { ClientRepository } from "@/repository/ClientsRepository";


export default  function page() {
  async function handleSubmit(data: any) {
    const response = await fetch("/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Erro ao criar cliente");
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-100">Novo Apontamento</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Preencha os dados abaixo para agendar um serviço.
          </p>
        </div>
        <Form 
          initialData={null} 
          onSubmit={handleSubmit} 
        /> 
      </div>
    </Layout>
  );
}