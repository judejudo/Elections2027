
import { CandidatesTable } from '@/components/CandidatesTable';
import { CommandMenuBot } from '@/components/CommandMenus/CommandMenuBot';
import UsersModal from '@/components/CommandMenus/UsersModal';
import { ReusableTable } from '@/components/reusableTable'
import React from 'react'

interface CandidatesData {
    id: number;               // Unique identifier for the candidate
    name: string;             // Candidate's full name
    photo: string;            // URL to the candidate's photo
    position: string;         // Position the candidate is running for or holds
    politicalParty: string;   // Candidate's political party
    location: string;         // Candidate's location or constituency
    content: string;          // Description of the candidate's campaign focus
    status: string;           // Candidate's current status (e.g., Active, Inactive)
    action: string;           // Label for an action (e.g., "View Details")

}

interface CandidatesProps {
    data: CandidatesData[];
}

// Fetch data directly inside the async component
export default async function CandidatesPage() {
    let data: CandidatesData[] = [];

    try {
        const res = await fetch('http://localhost:4000/candidates');
        if (!res.ok) throw new Error("Failed to fetch data");

        data = await res.json();
    } catch (error) {
        console.error(error);
    }
    
    return (
        <div>
            <CandidatesTable 
                headers={["No. ","Photo", "Name","Position", "Political Party", "Location","Status"]}
                data={data}
                title={'Candidates'}
                description={'The following candidates will be using this platform'}
                CommandMenu={UsersModal} 
            />
        </div>
    );
}