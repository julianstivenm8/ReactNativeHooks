
import styled from 'styled-components'
import {SUBTITLETEXT, COLOR} from 'ReactNativeHooks/src/constants/styles'

export const TouchableOpacity = styled.TouchableOpacity`
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 15px;
`;
export const Text = styled.Text`
	width: 100%;
	height: auto;
	background-color: #fff;
    font-family:${SUBTITLETEXT.fontFamily};
    font-style:${SUBTITLETEXT.fontStyle};
    font-size:${SUBTITLETEXT.fontSize};
    font-weight:${SUBTITLETEXT.fontWeight};
    color:${COLOR.green};
	border-radius: 15px;
`;