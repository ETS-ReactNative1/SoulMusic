import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Dimensions, Image, TouchableOpacity, View, Text} from "react-native";
import {Song} from "components/Song";
import {useDispatch} from "react-redux";
import {chosenSong} from "redux/reducer";
import {createRecent} from "components/Data";

 const SearchResult = (props: {
     song: Song,
     playlist: Array<Song>
 }) => {
    const dispatch = useDispatch()
    return(
        <View>
            <TouchableOpacity
                onPress={() => {
                    dispatch(chosenSong(props));
                    // createRecent(props.song);
                }}>
                <View style={{
                    flexDirection:"row",
                    margin:10,
                    marginBottom:0
                }}>
                    <Image
                        source={{uri:`https://i.ytimg.com/vi/${props.song.id}/hqdefault.jpg`}}
                        style={{
                            width: "45%",
                            height: 100
                        }} />
                    <View style={{
                        paddingLeft: 7
                    }}>
                        <Text style={{
                            fontSize:17,
                            width:Dimensions.get("screen").width/2,
                            color: 'green'
                        }}
                              ellipsizeMode="tail"
                              numberOfLines={3}
                        >
                            {props.song.title}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#FBF579'
                        }}>
                            {props.song.channel}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}

export default SearchResult;
