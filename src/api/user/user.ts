import { useQuery } from 'react-query';
import { request, gql } from "graphql-request";
import { endpoint } from '../../App';

const userDocument = gql`
    query User($id: String) {
        user (where: { id: $id } ) {
            id
            email
            displayName
            periods {
                numbersDrawn
                numbersNotDrawn
                savingsRange
                totalSavings
            }
        }
    }
`;

export const useUser = (id: string | undefined, email: string | null) => {
    return useQuery(['user', email], async () => {
        const data = await request({
            url: endpoint,
            document: userDocument,
            variables: { id }
        });
        return data;
    }, {
        enabled: id !== undefined && id !== null && id !== '' && email !== '' && email !== null
    });
};