import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  try {
    const id = parseInt(idParam);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid intake form ID' },
        { status: 400 }
      );
    }

    const intakeForm = await prisma.clientIntakeForm.findUnique({
      where: { id },
    });

    if (!intakeForm) {
      return NextResponse.json(
        { error: 'Intake form not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(intakeForm);

  } catch (error) {
    console.error('Error fetching intake form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: idParam } = await params;
  try {
    const id = parseInt(idParam);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid intake form ID' },
        { status: 400 }
      );
    }

    await prisma.clientIntakeForm.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Intake form deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting intake form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
