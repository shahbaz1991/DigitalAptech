//importing libraries and component 
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, I18nManager, Pressable, ActivityIndicator, FlatList } from "react-native";
import { Styles, Color } from "@common";
import { connect } from "react-redux";
import axios from 'axios';
import TextLabel from "../../../components/TextLabel";
import styles from "../styles";

const Posts = (props)=> {
    const [ loading, setLoading ] = useState(false)
    const [ post, setPost ] =  useState([])
    const { selected } = props.route.params;

    //making api call as per the user id
    useEffect(()=>{
        setLoading(true)
        function fetchPosts() {
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selected}`)
            .then(resp=> {
                setPost(resp.data)
                setLoading(false);
            })
            .catch((error)=> {
                setPost([])
                setLoading(false);
            })
        };
        fetchPosts();
        return (
            ()=>{}
        )
    },[selected]);

    //rendering items in a flatlist
    const renderPosts =({ item })=> (
        <View style={[styles.container, styles.cardContainer]}>
            <TextLabel
                color={'red'}
                isClickable={false}
                label={item.title}
            />
            <TextLabel
                color={'green'}
                isClickable={false}
                label={item.body}
            />
        </View>
    );

    return (
      <>
        {
        loading ? 
        <View style={[ Styles.Common.ColumnCenter, { flex: 1,}]}>
            <ActivityIndicator size="large" color={Color.green} />
            <TextLabel
                color={'green'}
                isClickable={false}
                label={'Loading...'}
            />
        </View>
        :
        <>
        <View style={{alignItems:'center', marginVertical:'2%'}}>
           <TextLabel
            color={'green'}
            isClickable={false}
            label={`User ${selected}`}
        />
        </View>
            {
                (post.length !== 0) ?
                <View style={{height:'90%'}}>
                     <FlatList
                        data={post}
                        extraData={post}
                        renderItem={renderPosts}
                        keyExtractor= {item => item.id.toString()}
                    />
                </View>
                : <TextLabel
                    color={'red'}
                    isClickable={false}
                    label={'No Posts to Display'}
                />
            }
        </>
        }
      </>
    );
}


const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });

export default connect(
  mapStateToProps,
  null
)(Posts);