import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function BoardPage() {
  return (
    <div className="w-full h-svh">
      <AlertDialog>
        <AlertDialogTrigger>➕ 글쓰기</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>로그인이 필요합니다.</AlertDialogTitle>
            <AlertDialogDescription>
              게시판에 글을 작성하려면 로그인이 필요합니다.
              <br /> 로그인 페이지로 이동하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction>로그인 페이지 이동</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">순번</TableHead>
            <TableHead>내용</TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="text-right">등록일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>사이트 이용 후기 & 여행 후기 작성</TableCell>
            <TableCell>관리자</TableCell>
            <TableCell className="text-right">2025.05.28</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
