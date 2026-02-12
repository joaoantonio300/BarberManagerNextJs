import { ClientRepository } from "@/repository/ClientsRepository";

export class ClientService {
  private repo = new ClientRepository();

  async create(data: any) {
    const exists = await this.repo.findByNumber(data.phone);

    if (exists != null) {
      throw new Error("NUMBER_ALREADY_EXISTS");
    }

    return this.repo.create(data);
  }
}
