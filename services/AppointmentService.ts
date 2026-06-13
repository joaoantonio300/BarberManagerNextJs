import { AppointmentsRepository } from "@/repository/AppointmentsRepository";
import { CreateAppointmentDTO } from "@/Schemas/Appointments/CreateAppointmentSchema";

export class AppointmentService {
  private repo = new AppointmentsRepository();

  async create(data: CreateAppointmentDTO) {
    return this.repo.create(data);
  }
}
