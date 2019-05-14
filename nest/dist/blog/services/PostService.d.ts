import { PostModel } from "../models/PostModel";
import { Observable } from "rxjs";
export declare class PostService {
    findAll(): Observable<PostModel[]>;
}
