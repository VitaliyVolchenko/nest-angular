import { Observable } from "rxjs";
import { PostModel } from "./models/PostModel";
import { PostService } from "./services/PostService";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    findAll(): Observable<PostModel[]>;
}
