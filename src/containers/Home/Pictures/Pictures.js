// importing libraries and components
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, I18nManager, Pressable, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";
import axios from 'axios';
import TextLabel from "../../../components/TextLabel";
import styles from "../styles";
import { Styles, Color } from "../../../common";

const Pictures = (props)=> {
    const [ loading, setLoading ] = useState(false)
    const [ imageList, setImageList ] =  useState([])
    const { selected } = props.route.params;

    //making api call to fetch the pictures for the user
    useEffect(()=>{
        setLoading(true)
        function fetchPosts() {
            axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${selected}`)
            .then(resp=> {
                setImageList(resp.data)
                setLoading(false);
            })
            .catch((error)=> {
                setImageList([])
                setLoading(false);
            })
        };
        fetchPosts();
        return (
            ()=>{}
        )
    },[selected]);

    //rendering the pictures in flatlist
    const renderPosts =({ item })=> (
        <View style={[styles.container, Styles.Common.ColumnCenterStart]}>
            <TextLabel
                color={'red'}
                isClickable={false}
                label={item.title}
            />
            <Image
                style={styles.logo}
                source={{uri:`${item.thumbnailUrl}`}}
                onLonLoadStart={()=>setLoading(true)}
                onLonLoadEnd={()=>setLoading(false)}
            />
        </View>
    );

    return (
      <>
        {
        loading
        ? <View style={[Styles.Common.ColumnCenter, { flex: 1, marginBottom: '2%' }]}>
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
                (imageList.length !== 0) ?
                <View style={{height:'90%'}}>
                     <FlatList
                        data={imageList}
                        extraData={imageList}
                        renderItem={renderPosts}
                        keyExtractor= {item => item.id.toString()}
                        removeClippedSubviews={true}
                        maxToRenderPerBatch={20}
                        windowSize={300}
                    />
                </View>
                : <TextLabel
                    color={'red'}
                    isClickable={false}
                    label={'No Pictures to Display'}
                />
            }
        </>
        }
      </>
    );
};

const mapStateToProps = ({ netInfo, user }) => ({ netInfo, user });

export default connect(
  mapStateToProps,
  null
)(Pictures);