// import { Folder } from './../model/folder';
// import { Consumer } from 'src/app/model/consumer';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Act } from '../model/act';
// import { Housing } from 'src/app/model/housing';
// import { environment } from './../../environments/environment';
// import { User } from '../model/user';

// @Injectable({
//   providedIn: 'root'
// })
// /**
//  * Service pour un acte
//  */
// export class ActService {

//   constructor(private http: HttpClient) {
//   }

//   getHousingByAct(actId: string): Observable<Housing> {
//     return this.http.get<Housing>(`${environment.backUrl}/act/${actId}/housing`);
//   }

//   getConsumerByAct(actId: string): Observable<Consumer> {
//     return this.http.get<Consumer>(`${environment.backUrl}/act/${actId}/consumer`);
//   }

//   getInfo(actId: string): Observable<Act> {
//     return this.http.get<Act>(`${environment.backUrl}/act/${actId}`);
//   }

//   updateCompleteAct(act: Act, consumer: Consumer, housing: Housing): Observable<Act> {
//     const completeAct = {...act, consumer: {...consumer}, housing: {...housing}};
//     if (act.id !== undefined) {
//       return this.http.post<Act>(`${environment.backUrl}/act/update`, completeAct);
//     } else {
//       return this.http.put<Act>(`${environment.backUrl}/act/save`, completeAct);
//     }
//   }

//   closeAct(act: Act): Observable<Act> {
//     return this.http.post<Act>(`${environment.backUrl}/act/cloture`, act.id);
//   }

//   getProjection(actId: string): Observable<Act> {
//     return this.http.get<Act>(`${environment.backUrl}/act/${actId}/projection`);
//   }

//   /**
//    * Récupère le dossier associé à l'acte, si existant
//    * @param actId id de l'acte
//    */
//   getActFolder(actId: string): Observable<Folder> {
//     return this.http.get<Folder>(`${environment.backUrl}/act/${actId}/folder`);
//   }

//   getAdvisers(structuresId: string[]): Observable<User[]> {
//     return this.http.get<User[]>(`${environment.backUrl}/act/advisers?structuresId=${structuresId}`);
//   }
// }
