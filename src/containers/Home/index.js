//import libraries and components
import React, { PureComponent, Component } from "react";
import { StyleSheet, View, Text, Image, I18nManager, Pressable, ActivityIndicator, Button, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import InputButton from "../../components/InputButton";
import TextLabel from "../../components/TextLabel";
import { Styles } from '@common';
import { clearData } from "../../utils/storage";
import { updateUser } from "../../redux/action";
import { bindActionCreators } from "redux";

class Home extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  };
  
  componentDidMount() {
  };

  componentWillUnmount() {
    this.setState({loading: false})
  };

  //rendering the users with the post and picture tab
  renderList = ({ item }) => (
    <View style={[styles.container, styles.cardContainer]}>
      <TextLabel
        color={'green'}
        isClickable={false}
        label={`User ${item}`}
      />
      <View style={Styles.Common.RowCenterLeft}>
        <InputButton
          onPress={()=>this.props.navigation.navigate('Posts',{selected: item})} 
          isLoading={this.state.loading}
          label={'POSTS'}
          onlyPadding={true}
          color={'green'}
        />
        <View style={{margin: 5}}/>
        { (this.props.user.token === 'admin') &&
          <InputButton
            onPress={()=>this.props.navigation.navigate('Pictures',{selected: item})} 
            isLoading={this.state.loading}
            label={'PICTURE'}
            onlyPadding={true}
            color={'green'}
          />
        }
      </View>
    </View>
  );

  //logging out user from the application
  logout = async ()=> {
    try{
      await clearData();
      this.props.updateUser({})
    } 
    catch(error){
      //
    };
  };

  render() {
    const { loading, list } = this.state;
    const { user } = this.props;

    if (loading) return null
    return (
      <View style={{flex:1}}>
        <Text style={ [styles.heading, styles.screenHeading] }>Welcome {user?.token.toUpperCase()}</Text>
        <View style={{height:'80%', width:'100%'}}>
          <FlatList
            data={list}
            extraData={list}
            renderItem={this.renderList}
            keyExtractor={item => item.toString()}
          />
        </View>
        <View style={{marginHorizontal:'2%'}}>
          <InputButton
            onPress={this.logout}
            isLoading={loading}
            label={'LOGOUT'}
            color={'red'}
          />
        </View>
      </View>
    );
  };
};

const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });

const mapDispatchToProps = (dispatch) => {
  return{
  updateUser: bindActionCreators(updateUser, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);