import { useMutation } from "@tanstack/react-query";
import { commentsKeys } from "../queryKeys";
import { updateComment } from "../../services/CommentService";

export function useUpdateComment() {
	return useMutation({
		mutationKey: commentsKeys.update(),
		mutationFn: updateComment,
	});
}
