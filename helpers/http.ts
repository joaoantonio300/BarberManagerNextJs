import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function ok(data: unknown, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function fail(
  message: string,
  status = 400,
  errors?: unknown
) {
  return NextResponse.json(
    { success: false, message, errors },
    { status }
  );
}

export function validationFail(error: ZodError) {
  const firstErrorMessage = error.issues[0]?.message || "Dados inválidos";
  return fail(firstErrorMessage, 400, error.flatten().fieldErrors);
}

