import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { YellowButton } from "components/buttons/YellowButton";
import { FunnyDialog } from "components/FunnyDialog";
import RadioValidator from "components/radioValidator";
import { useEffect, useRef, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

ValidatorForm.addValidationRule('isRequired', value => !!value);

export const EditModal = ({ task, open, save, close }) => {
    const [data, setData] = useState();
    const formRef = useRef();
    useEffect(() => {
        // console.log('editData changed', editData);
        setData(task);
    }, [task]);
    const handleSave = async () => {
        if (await formRef.current.isFormValid(false)) {
            save(data);

            setData(undefined);
        }
    };
    const handleClose = () => {
        close();
        setData(undefined);
    };
    const onchangeField = (name) => (e) => {
        console.log(e.target);
        setData(data => ({ ...data, [name]: e.target.value }));
    };
    const getFieldProps = (name) => ({
        onChange: onchangeField(name),
        value: (data && data[name]) || '',
        validators: ['isRequired'],
        errorMessages: ['this field is required']
    });
    return <FunnyDialog open={open} onClose={handleClose}>
        <DialogContent>
            <ValidatorForm
                instantValidate={false}
                ref={formRef}
                onSubmit={handleSave}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    {...getFieldProps('title')}
                    autoFocus
                    name="title"
                    required
                    margin="dense"
                    id="Task Title"
                    label="Task Title"
                    fullWidth
                    variant="outlined" />
                <TextValidator
                    {...getFieldProps('description')}
                    name="description"
                    margin="dense"
                    id="Task Description"
                    label="Task Description"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <TextValidator
                    {...getFieldProps('gifts')}
                    required
                    margin="dense"
                    name="gifts"
                    id="Gifts and KPI for this task ;)"
                    label="Gifts and KPI for this task ;)"
                    fullWidth
                    variant="outlined" />
                <RadioValidator name="priority"  {...getFieldProps('priority')}>
                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="High" control={<Radio />} label="High" />
                </RadioValidator>
            </ValidatorForm>
        </DialogContent>
        <DialogActions>
            <YellowButton variant="outlined" size="small" onClick={handleSave}>Add To Tasks</YellowButton>
        </DialogActions>
    </FunnyDialog>;
};
