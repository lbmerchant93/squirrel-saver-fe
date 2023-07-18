import { useMutation } from 'react-query';
import { request, gql } from "graphql-request";
import { endpoint } from '../../App';

interface PeriodUpdateInputData {
    id: number;
    numberDrawn: number;
    numbersNotDrawn: number[];
};

const updatePeriodMutation = gql`
    mutation updatePeriod( 
        $data: PeriodUpdateInput!
        $where: PeriodWhereUniqueInput!
    ) { 
        updateOnePeriod (
            data: $data
            where: $where
        ) {
            id
            totalSavings
            savingsRange
            numbersDrawn
            numbersNotDrawn
        }
    }
`;

const updatePeriod = async (updatePeriodInput: PeriodUpdateInputData) => {
    const { id, numberDrawn, numbersNotDrawn } = updatePeriodInput;

    // Mutate the numbersNotDrawn array to remove the number being saved
    numbersNotDrawn.splice(numbersNotDrawn.indexOf(numberDrawn), 1);
    
    const variables = {
        "totalSavings": { "increment": numberDrawn },
        "numbersDrawn": { "push": numberDrawn },
        "numbersNotDrawn": { "set": numbersNotDrawn }
    };

    const data = await request({
        url: endpoint,
        document: updatePeriodMutation,
        variables: { data: variables, where: { "id": id } }
    });

    return data;
};

export const useUpdatePeriod = () => {
    return useMutation(updatePeriod);
};