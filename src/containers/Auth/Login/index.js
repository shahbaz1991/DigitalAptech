//importing libraries and components
import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Image, I18nManager, Keyboard } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import InputText from "../../../components/InputText";
import InputButton from "../../../components/InputButton";
import TextLabel from "../../../components/TextLabel";
import { updateUser } from "../../../redux/action";
import { storeData } from "../../../utils/storage";
import { bindActionCreators } from "redux";
import Images from "../../../common/Images";

class AuthLogin extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      isSecurePassword: true,
      userName: '',
      password: '',
      error: ''
    }
  };

  componentDidMount() {
  };

  componentWillUnmount() {
    this.setState({
      isLoading: false,
      isSecurePassword: true,
      userName: '',
      password: '',
      error: ''
    })
  };

  //updates the state as the user types in textInput
  _onChangeText =(name, value)=>{
    if(name === 'userName'){
      this.setState({userName: value.replace(/[^a-zA-Z ]/g, '')})
    } else{
      this.setState({password: value.replace(/[^a-zA-Z ]/g, '')})
    }
  };

  //logs the user inside the app by storing token in local storage
  buttonPressed = async ()=>{
    const { userName, password } = this.state;

    Keyboard.dismiss();
    if( userName === password ){
      if(['admin', 'editor'].includes(userName.toLowerCase())){
        try{
          this.setState({error: ""})
          await storeData('TOKEN', userName.toLowerCase())
          this.props.updateUser({token: userName.toLowerCase()})
        } 
        catch(error){
          await storeData('TOKEN', userName.toLowerCase())
          this.setState({error: "Something went wrong"})
        }
      } else {
        this.setState({error: "Not a valid user"})
      }
    } else {
      this.setState({error: "Username and Password doesn't match"})
    }
  };

  render() {
    const { userName, isSecurePassword, password, error, isLoading } = this.state;
    return (
      <View style={styles.container}>        
        <InputText 
          _onChangeText={this._onChangeText}
          name='userName'
          placeholder={'UserName'}
          hasRightIconClickable={false}
          secureTextEntry={false}
          autoCapitalize={'none'}
          value={userName}
        />
        <InputText 
          _onChangeText={this._onChangeText}
          name='password'
          placeholder={'Password'}
          autoCapitalize={'none'}
          value={password}
          hasRightIconClickableChange={Images.UnSecureEye}
          hasRightIconClickable={Images.SecureEye}
          secureTextEntry={isSecurePassword}
          onPressRightIcon={()=>this.setState({isSecurePassword: !isSecurePassword})}
        />
        <InputButton
          onPress={this.buttonPressed} 
          isLoading={isLoading}
          label={'Login'}
          onlyPadding={true}
          color={'green'}
        />
        
        {/* showing error text  */}
        { (error.length > 0) &&
          <TextLabel
            color={'red'}
            isClickable={true}
            onPress= {()=> this.setState({error:''})} 
            label={error}
          />
        }
      </View>
    );
  };
};

const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });

const mapDispatchToProps = (dispatch) => {
  return{
    updateUser : bindActionCreators(updateUser,dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);