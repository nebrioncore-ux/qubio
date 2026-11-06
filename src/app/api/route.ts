export function GET() {
  return Response.json(
    { error: "NOT_AVAILABLE", message: "The Qubio business API is not enabled in this preview." },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}
