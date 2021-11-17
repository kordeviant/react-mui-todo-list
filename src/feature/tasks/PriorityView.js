import styled from '@emotion/styled';
import Box from "@mui/system/Box";
import './PriorityView.scss';

const ColorCircle = styled('div')`
     background-color: ${props => props.color};
     border-radius: 50%;
     width: 24px;
     height: 24px;
     border: 1px solid #000;
`;

export default function PriorityView({ priority, dir }) {
    const circleColor = priority == 'High' ? 'red' : (priority == 'Low' ? 'lightgreen' : 'yellow');
    return (
        <Box className="priority-view" sx={{ display: 'inline-flex', direction: dir || 'ltr', alignItems: 'flex-start' }}>
            <Box className="text" sx={{ ...dir === 'rtl' && { color: circleColor, width: 'auto !important', paddingLeft: 1 } }}>{priority}</Box>
            <ColorCircle color={circleColor} />
        </Box>
    );
}
