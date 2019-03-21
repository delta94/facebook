import React, { Component } from 'react'
import {ScrollView, StyleSheet,View} from 'react-native';
import { Container, Header,
  Icon, Left,Item,Input,
Body, Right, Content,Button } from 'native-base';
import FeedPost from '../../Components/feedpost';
import HomeSwiperComponent from '../../Components/homeSwiper';
import BasicExample from '../../Components/lottieView';
import { connect } from 'react-redux';
import { getNews } from './HomeTabActions';
export class HomeTabScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    let article = this.props.article;
    console.log(article);
    return (
      <Container>
      <Header >
        <Left style={{flex: 1}}>
          <Button transparent>
            <Icon name='ios-camera' />
          </Button>
        </Left>
        <Body style={{flex: 5}}>
        <Item style={{marginVertical: 5}}>
            <Icon style={{color:"white"}} name="ios-search" />
            <Input style={{color:"white"}}
            placeholder="Search"
            placeholderTextColor="white"/>
          </Item>
        </Body>
        <Right style={{flex: 1}}>
          <Button transparent>
            <Icon name='ios-chatbubbles' />
          </Button>
        </Right>
      </Header>
      <Content>
        
        <FeedPost />
        <ScrollView 
        scrollEventThrottle={16}>
          <HomeSwiperComponent />
        </ScrollView>
        {this.props.loading && <View style={{flex: 1}}>
        <BasicExample url={'../../Assets/Lottie/loaderHome.json'}/>
        </View>}
        
      </Content>
    </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = (state) => ({
  article: state.news,
  loading: state.loading
})
const mapDispatchToProps = {
getNews: getNews,
};
HomeTabScreen = connect(
mapStateToProps,
mapDispatchToProps
)(HomeTabScreen)

export default HomeTabScreen;