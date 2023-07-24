import { useQuery, useMutation, useQueryClient } from 'react-query';
import { request, gql } from "graphql-request";
import { endpoint } from '../../App';

const userDocument = gql`
    query User($id: String) {
        user (where: { id: $id } ) {
            id
            email
            displayName
            periods {
                id
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
        const data : any = await request({
            url: endpoint,
            document: userDocument,
            variables: { id }
        });
        return data
    }, {
        enabled: id !== undefined && id !== null && id !== '' && email !== '' && email !== null
    });
};

const loginUserDocument = gql`
    mutation loginUser($data: UserLoginInputData!){
        loginUser(
            data: $data
        ) {
            id
            email
            displayName
            periods {
                id
                numbersDrawn
                numbersNotDrawn
                savingsRange
                totalSavings
            }
        }
    }
`

interface UserLoginInput {
    id: string;
    email: string | null;
    displayName: string | null;
};

const loginUserMutation = async (createUserInput: UserLoginInput) => {
    const { id, email, displayName } = createUserInput;

    const variables = {
        "id": id,
        "email": email,
        "displayName": displayName
    };

    const data = await request({
        url: endpoint,
        document: loginUserDocument,
        variables: { data: variables }
    });
    return data;
};

export const useLoginUser = () => {
    const queryClient = useQueryClient();

    return useMutation(loginUserMutation, {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ["user"] })
        }
    });
};