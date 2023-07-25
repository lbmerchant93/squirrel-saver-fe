import React, { Dispatch, SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { useUpdatePeriod } from '../api/period/period';

interface SaveNumberModalProps {
    isOpen: boolean;
    onClose: () => void;
    periodId: number | null;
    nextNumber: number;
    numbersNotDrawn: number[];
    setIsSavedNumber: Dispatch<SetStateAction<boolean>>;
    refetch: () => {};
}

const SaveNumberModal: React.FC<SaveNumberModalProps> = (props) => {
    const { isOpen, onClose, periodId, nextNumber, numbersNotDrawn, setIsSavedNumber, refetch } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const updatePeriod = useUpdatePeriod();

    const handleUpdatePeriod = () => {
        setIsLoading(true);
        const updateInput = {
            id: periodId,
            numberDrawn: nextNumber,
            numbersNotDrawn: numbersNotDrawn
        }

        updatePeriod.mutate(updateInput, {
            onError: (err: any) => {
                console.log(err);
            },
            onSuccess: () => {
                setIsSavedNumber(true);
                refetch();
            },
            onSettled: () => {
                setIsLoading(false);
                onClose();
            }
        });
    };

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby={`Save number modal`}
            aria-describedby={`Add this number to your savings.`}
            className="save-number-modal"
        >
           <Box bgcolor="white" maxWidth={450} maxHeight={450} position={"relative"} p={3} left={"50%"} top={"50%"} style={{ transform: 'translate(-50%, -50%)' }} display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Box position={"absolute"} left={"92%"} top={"1%"}>
                    <IconButton onClick={onClose} edge="start" color="inherit" aria-label="exit">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant={'h4'}>Are you sure you want to save this number?</Typography>
                <Box mt={1} width={200} display="flex" justifyContent="space-between">
                    <LoadingButton
                        onClick={handleUpdatePeriod} 
                        variant='contained' 
                        color='success'
                        loading={isLoading}
                    >
                            Update
                    </LoadingButton>
                    <LoadingButton
                        onClick={onClose} 
                        variant='contained' 
                        color="inherit"
                        loading={isLoading}
                    >
                            Cancel
                    </LoadingButton>
                </Box>
            </Box> 
        </Modal>
    );
};

export default SaveNumberModal;