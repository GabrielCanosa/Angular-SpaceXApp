import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpacexService{
    constructor(private http: HttpClient) {}

    GetQuery( query:string ){
        const url = `https://api.spacexdata.com/v3/${query}`
        return this.http.get(url);
    }

    //#region GetHistory  
    GetHistory(){
        return this.GetQuery(`history`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetCompanyInfo
    GetCompanyInfo(){
        return this.GetQuery(`info`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetApiInfo
    GetApiInfo(){
        return this.GetQuery(``).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetAllLandingPads and GetLandingPadById
    GetAllLandingPads(){
        return this.GetQuery(`landpads`).pipe(map((data:any) => { return data }));
    }

    GetLandingPadById(id:string){
        return this.GetQuery(`landpads/${id}`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region , GetAllLaunches and GetLaunchById
    GetAllLaunches(){
        return this.GetQuery(`launches`).pipe(map((data:any) => { return data }));
    }

    GetLaunchById(id:number){
        return this.GetQuery(`launches/${id}`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetAllMissions and GetMissionById
    GetMissionById(id:string){
        return this.GetQuery(`missions/${id}`).pipe(map((data:any) => { return data }));
    }

    GetAllMissions(){
        return this.GetQuery(`missions`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetAllPayloads and GetPayloadById
    GetPayloadById(id:string){
        return this.GetQuery(`payloads/${id}`).pipe(map((data:any) => { return data }));
    }

    GetAllPayloads(){
        return this.GetQuery(`payloads`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetAllRockets and GetRocketById
    GetRocketById(id:string){
        return this.GetQuery(`rockets/${id}`).pipe(map((data:any) => { return data }));
    }

    GetAllRockets(){
        return this.GetQuery(`rockets`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    //#region GetRoadster
    GetRoadster(){
        return this.GetQuery(`roadster`).pipe(map((data:any) => { return data }));
    }
    //#endregion

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }
        
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}