import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';


export default class CardComponent extends Component {
    render() {

        const { data } = this.props;
        const { image } = JSON.parse(data.json_metadata);

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }} />
                        <Body>
                            <Text>{data.author}</Text>
                            <Text note>{new Date(data.created).toDateString()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                {
                    image && image.length ?
                        <CardItem cardBody>
                            <Image
                                source={{ uri: "https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png" }}
                                style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem> : null
                }
                <CardItem style={{ height: 20 }}>
                    <Text>{data.active_votes.length} likes</Text>
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{ color: "black" }}></Icon>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{ color: "black" }}></Icon>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{ color: "black" }}></Icon>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>
                        <Text style={{ fontWeight: 900 }}>Anpigon</Text>
                        이번에 리액트 네이티브로 인스타그램을 구현하는 포스팅입니다. 다른 앱을 클론 코딩 하는 것은 정말 재미있습니다. 구글에서 인스타그램 클론코딩 강의를 찾아보니, 다른 개발자들이 올린 강의를 몇 개 찾을 수 있었습니다.
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})