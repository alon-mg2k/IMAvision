import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import StyleGreenView from '../../../styles/views/view_background_green';
import StyleFormView from '../../../styles/views/view_background_form';
import StyleBlackView from '../../../styles/views/view_black';
import TextHeaderWhite from '../../../styles/fonts/font_headerwhite';
import TextParagraphWhite from '../../../styles/fonts/font_paragraphwhite';
import FontTextViewLabel from '../../../styles/fonts/font_textviewlabel';
import TextViewWhite from '../../../styles/views/textviews/textview_white';
import ButtonGreenWhite from '../../../styles/buttons/button_greenwhite';
import ParagraphBlack from '../../../styles/fonts/font_paragraphblack';

const LoginScreen = () => {
    return(
        <View style={StyleGreenView.imagen2}>
            <View style={StyleFormView.form1}>
            <View style={StyleBlackView.rectangulo}>
                <Text style={TextHeaderWhite.fontHeader}>Bienvenido a IMAvision</Text>
                <Text style={TextParagraphWhite.fontParagraphWhite}>IMAvision es una herramienta ideal para todo interesado en
                la ingeniería, una perfecta guía de aprendizaje a una nueva 
                experiencia académica y laboral. Únete completamente gratis 
                o inicia sesión y empieza a forjarte como ingeniero a tu medida!</Text>
            </View>
            <Text style={FontTextViewLabel.FontTextViewLabel}>Correo electrónico</Text>
            <TextInput style={TextViewWhite.TVWhite}></TextInput>
            <Text style={FontTextViewLabel.FontTextViewLabel}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={TextViewWhite.TVWhite}></TextInput>
            <Text style={ParagraphBlack.olvidasteTu}>Olvidaste tu contraseña? Clic aquí en <Text style={ParagraphBlack.blueHLText}>Recuperar Cuenta.</Text></Text>
            <TouchableOpacity style={ButtonGreenWhite.btngreenwhite}>
                <Text style={ButtonGreenWhite.btngreenwhitetext}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ButtonGreenWhite.btngreenwhite}>
                <Text style={ButtonGreenWhite.btngreenwhitetext}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ButtonGreenWhite.btngreenwhite}>
                <Text style={ButtonGreenWhite.btngreenwhitetext}>ACERCA DE</Text>
            </TouchableOpacity>
            </View>
            <Text style={ParagraphBlack.pFooter}>Copyright IMAvision™  UANL®  2022, Todos los derechos reservados.</Text>
        </View>
    );
}    

export default loginScreen;
