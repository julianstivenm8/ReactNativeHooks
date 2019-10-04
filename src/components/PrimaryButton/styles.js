
import styled from 'styled-components'
import { SUBTITLETEXT, COLOR, PRINCIPALGRID } from 'ReactNativeHooks/src/constants/styles'

export const TouchableOpacity = styled.TouchableOpacity`
	width: auto;
	height: 50;
	margin: ${PRINCIPALGRID.marginTop} ${PRINCIPALGRID.marginHorizontal} 0px ${PRINCIPALGRID.marginHorizontal};
	background-color: ${props =>
		(props.type === 'green' && COLOR.green) ||
		(props.type === 'orange' && COLOR.orange) ||
		(props.type === 'black' && COLOR.black) ||
		(props.type === 'white' && COLOR.white)
	};
	border: 1px solid #000000;
`;
export const Text = styled.Text`
	width: 100%;
	height: auto;
    font-family:${SUBTITLETEXT.fontFamily};
    font-style:${SUBTITLETEXT.fontStyle};
    font-size:${SUBTITLETEXT.fontSize};
    font-weight:${SUBTITLETEXT.fontWeight};
	color:${props =>
		(props.type === 'green' && COLOR.white) ||
		(props.type === 'orange' && COLOR.white) ||
		(props.type === 'black' && COLOR.white) ||
		(props.type === 'white' && COLOR.black)
	};
	border-radius: 15px;
`;