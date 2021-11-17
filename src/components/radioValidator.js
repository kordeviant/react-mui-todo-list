import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import { ValidatorComponent } from 'react-material-ui-form-validator';

class RadioValidator extends ValidatorComponent {
    renderValidatorComponent() {
        // return your validated component
        const { errorMessages, validators, validatorListener, ...rest } = this.props;

        return <FormControl component="fieldset" fullWidth>
            <RadioGroup
                {...rest}
                row sx={{ justifyContent: 'space-between' }} name="row-radio-buttons-group" />


            {this.errorText()}

        </FormControl>;
    }
    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default RadioValidator;