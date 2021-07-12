import { Observable, of } from "rxjs";

export abstract class TableService {
    public init$(): Observable<void> {
        return of();
    }
}
