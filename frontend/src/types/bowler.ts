import type {Team} from "./team";

export type Bowler = {
    bowlerID: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamID: number;
    team?: Team;
};