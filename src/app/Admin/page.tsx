import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import Package2Icon from "../../components/icons/Package2Icon"
import Search from "../../components/icons/Search"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <Package2Icon />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Estudiantes
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Cursos
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Profesores
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <Search />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Buscar estudiantes.."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full bg-white dark:bg-white" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="60"
              src="/assets/img/logo/PNG/iabot-PNG-05.png"
              style={{
                objectFit: "cover",
              }}
              width="60"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg md:text-2xl">Estudiantes</h1>
          <Button className="ml-auto" size="sm">
            Agregar Estudiante
          </Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Class</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-100 dark:bg-gray-800">
                  <TableCell className="font-medium">001</TableCell>
                  <TableCell className="font-medium">Alice Johnson</TableCell>
                  <TableCell className="hidden md:table-cell">alice@example.com</TableCell>
                  <TableCell className="hidden md:table-cell">5th Grade</TableCell>
                  <TableCell className="hidden md:table-cell">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">002</TableCell>
                  <TableCell className="font-medium">Bob Smith</TableCell>
                  <TableCell className="hidden md:table-cell">bob@example.com</TableCell>
                  <TableCell className="hidden md:table-cell">6th Grade</TableCell>
                  <TableCell className="hidden md:table-cell">Active</TableCell>
                </TableRow>
                <TableRow className="bg-gray-100 dark:bg-gray-800">
                  <TableCell className="font-medium">003</TableCell>
                  <TableCell className="font-medium">Ella Davis</TableCell>
                  <TableCell className="hidden md:table-cell">ella@example.com</TableCell>
                  <TableCell className="hidden md:table-cell">4th Grade</TableCell>
                  <TableCell className="hidden md:table-cell">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">004</TableCell>
                  <TableCell className="font-medium">Max Wilson</TableCell>
                  <TableCell className="hidden md:table-cell">max@example.com</TableCell>
                  <TableCell className="hidden md:table-cell">3rd Grade</TableCell>
                  <TableCell className="hidden md:table-cell">Active</TableCell>
                </TableRow>
                <TableRow className="bg-gray-100 dark:bg-gray-800">
                  <TableCell className="font-medium">005</TableCell>
                  <TableCell className="font-medium">Sophia Lee</TableCell>
                  <TableCell className="hidden md:table-cell">sophia@example.com</TableCell>
                  <TableCell className="hidden md:table-cell">2nd Grade</TableCell>
                  <TableCell className="hidden md:table-cell">Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
