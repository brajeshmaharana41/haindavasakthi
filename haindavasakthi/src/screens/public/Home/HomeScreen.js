import React, { useState, useRef, useCallback } from 'react'
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { FlatListSlider } from 'react-native-flatlist-slider'
import Carousel from 'react-native-snap-carousel'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Mdicon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../../../components/UIComponents/Header'
import ServicesCard from '../../../components/UIComponents/ServicesCard'
import { BoldText, LightText, RegularText } from '../../../components/UIComponents/Text'
import styles from '../../../theme/Styles'
import { COLORS, WINDOW_WIDTH } from '../../../theme/Theme'
import AboutItem from './AboutItem'
import BlogItem from './BlogItem'
import CarouselItem from './CarouselItem'
import FeedbackItem from './FeedbackItem'
// import Icon1 from '../../../assets/images/icon1.png'
const exampleItems = [
    {
        title: "Item 1",
        text: "Text 1",
    },
    {
        title: "Item 2",
        text: "Text 2",
    },
    {
        title: "Item 3",
        text: "Text 3",
    },
    {
        title: "Item 4",
        text: "Text 4",
    },
    {
        title: "Item 5",
        text: "Text 5",
    }]
const HomeScreen = props => {
    const { navigation } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselItems, setCarouselItems] = useState(exampleItems)
    const bannerData = [{
        image: require('../../../assets/images/slider1.jpg'),
        title: 'We Believe in The God Grace',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider2.jpg'),
        title: 'We Believe in The God Grace',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider3.jpg'),
        title: 'We Believe in The God Grace',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }, {
        image: require('../../../assets/images/slider4.jpg'),
        title: 'We Believe in The God Grace',
        desc: 'God cannot be realized through the intellect. Intellect can lead one to a certain extent and no further. It is a matter of faith and experience derived from that faith.',
    }]
    const aboutData = [
        { title: 'Vision', desc: 'To make All the Hindhu people united and not to allow them to convert into any other Religion' },
        { title: 'Mission', desc: 'Dharma Rakshna Desa Rakshane Maa Dyeyam' },
        { title: 'Values', desc: 'Arriving on a variety of visas from abroad and deporting foreigners conducting evangelism in this country.' }
    ]

    const servicesData = [
        { title: 'Aarti', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
        { title: 'Meditation', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
        { title: 'Happiness Program', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
        { title: 'Yoga', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
        { title: 'Wedding Pooja', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
        { title: 'Pilgrimage', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.' },
    ]

    const blogData = [{
        image: require('../../../assets/images/blog1.jpg'),
        type: 'Temple / Aarti',
        title: 'The PC has improved the world.',
        views: '10', likes: '08', comments: '02',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        postBy: 'Brian Wright'
    }, {
        image: require('../../../assets/images/blog2.jpg'),
        type: 'Temple / Aarti',
        title: 'The PC has improved the world.',
        views: '15', likes: '24', comments: '03',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        postBy: 'Brian Wright'
    }, {
        image: require('../../../assets/images/blog3.jpg'),
        type: 'Temple / Aarti',
        title: 'The PC has improved the world.',
        views: '15', likes: '24', comments: '03',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        postBy: 'Brian Wright'
    }, {
        image: require('../../../assets/images/blog4.jpg'),
        type: 'Temple / Aarti',
        title: 'The PC has improved the world.',
        views: '15', likes: '24', comments: '03',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        postBy: 'Brian Wright'
    }]

    const feedbackData = [{
        title: 'హిందుసేన',
        desc: 'హిందూ సంప్రదాయాల విశిష్టతను తెలియచేసే గోడ పత్రికలు మరియు ఫ్లెక్షిలను ప్రతి గుడి దగ్గరకి చేరవేస్తూ వాటిని ప్రచ్రారం చేయటం',
        author: 'Shankar Sharma',
        founder: require('../../../assets/images/fd1.jpg')
    }, {
        title: 'హిందుసేన సేవాదళ్',
        desc: 'గుంటూరు నగరంలో కొంతమంది యువకులు సమూహంగా ఏర్పడి హిందు సంప్రదాయాలను గుడి కేంద్రంగా ప్రచారం చేస్తూ హిందూ ధర్మ విశిష్టతను పెంపొందించే కార్యక్రమముల నిర్వహణ',
        author: 'Pratipati Balabaskar',
        founder: require('../../../assets/images/fd2.jpg')
    }, {
        title: 'వైష్ణవ సేన',
        desc: 'తూర్పు గోదావరి జిల్లా కేంద్రంగా దళిత వాడలలో కార్తిక దీపోత్సవం అలాగే దళితులకు హిందు సంప్రదాయ విశ్లేషణ అలాగే భజన కార్యక్రమముల నిర్వహణమరియు భజన చేసే వస్తువుల వితరణ చేస్తూ గ్రామ స్థాయిలో కార్యక్రమముల నిర్వహణ',
        author: 'Narasimha',
        founder: require('../../../assets/images/fd3.jpg')
    }, {
        title: 'అరుణాచలసేన',
        desc: 'హిందు గ్రంధాలను హైందవ గ్రంధాలను వక్రీకరించే అన్యమతస్తుల కుట్రలను భగ్నం చేస్తూ అసలైన గ్రంధాల విశ్లేషణ చేస్తూ ఎవరైతే ప్రశ్నిస్తున్నారో వారి గ్రంధాలలోని లోపాలను కూడా ఎత్తి చూపిస్తూ హిందు ధర్మ రక్షణకు కార్యాచరణ',
        author: 'Bhaskar',
        founder: require('../../../assets/images/fd4.jpg')
    }, {
        title: 'ధర్మ ధ్వజం',
        desc: 'విజయవాడ కేంద్రంగా భారతదేశ కనుమరుగైన అసలైనచరిత్రను ఫోటోషాప్ స్లయిడ్ల ద్వారా అందరికి తేలికగా అర్ధం అయ్యే రీతిలో ప్రచారం చేస్తూ, హిందుధర్మ వినాశనానికి నిజమైన అసలైన కారణం ఎవరో అదే విధంగా హిందు సమాజం తెలుసుకోవలసింది ఆచరించవలసింది ఏమిటో తెలియచేస్తూ క్షేత్రస్తాయిలో భజన మండళ్లను కలుస్తూ వాళ్ళని ఉతేజ పరుస్తూ చేస్తున్న కార్యచరణ',
        author: 'Prasad',
        founder: require('../../../assets/images/fd5.jpg')
    }]

    const entries = [
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting 1",
            text: "Text 1",
        },
        {
            title: "Lorem Ipsum is simply dummy typesetting text of the printing and typesetting 2",
            text: "Text 2",
        }
    ]

    const _carousel = useRef(null)

    const renderItem = useCallback(({ item, index }) => (
        <View
            style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}
        >
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>
    ), []);

    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView>
                {/* Banner */}
                <FlatListSlider
                    data={bannerData}
                    component={<CarouselItem />}
                    indicatorContainerStyle={styles.bannerIndicators}
                    indicatorActiveColor={COLORS.primary}
                    indicatorInActiveColor={COLORS.white}
                    indicatorActiveWidth={18}
                    animation
                    timer={4000}
                />

                {/* Icons */}
                <View style={[styles.row]}>
                    <Image source={require('../../../assets/Icons/icon1.png')} style={styles.homeIcon} />
                    <Image source={require('../../../assets/Icons/icon2.png')} style={styles.homeIcon} />
                    <Image source={require('../../../assets/Icons/icon3.png')} style={styles.homeIcon} />
                    <Image source={require('../../../assets/Icons/icon4.png')} style={styles.homeIcon} />
                    <Image source={require('../../../assets/Icons/icon5.png')} style={styles.homeIcon} />
                </View>

                {/* About us */}
                <View style={[styles.homeAboutWrapper]}>
                    <BoldText style={[styles.homeHeading, styles.mbMd]}>About Us</BoldText>
                    <FlatListSlider
                        data={aboutData}
                        component={<AboutItem />}
                        indicatorContainerStyle={styles.homeAboutIndicators}
                        indicatorActiveColor={COLORS.primary}
                        indicatorInActiveColor={COLORS.dark}
                        indicatorActiveWidth={12}
                        indicatorActiveHeight={10}
                        animation
                        autoscroll={false}
                    />
                </View>

                {/* Counters */}
                <ImageBackground
                    source={require('../../../assets/images/live-sermon-audio.jpg')}
                    style={[styles.homeCountersWrapper]}
                >
                    <View style={[styles.overlay, styles.darkOverlay]} />
                    <View style={[styles.mtLg, styles.mbLg, { alignItems: 'center' }]}>
                        <BoldText style={styles.homeHeadingTop}>OUR FAMILY</BoldText>
                        <BoldText style={[styles.homeHeading, styles.whiteText]}>We Work Together</BoldText>
                    </View>
                    <View style={[styles.row, styles.mbLg, styles.homeCountersInner]}>
                        <View style={[styles.homeCounterItem]}>
                            <BoldText style={[styles.whiteText, styles.homeCountersCount]}>2648</BoldText>
                            <LightText style={[styles.whiteText]}>Volunteer</LightText>
                        </View>
                        <View style={[styles.homeCounterItem]}>
                            <BoldText style={[styles.whiteText, styles.homeCountersCount]}>487</BoldText>
                            <LightText style={[styles.whiteText]}>Priest</LightText>
                        </View>
                        <View style={[styles.homeCounterItem]}>
                            <BoldText style={[styles.whiteText, styles.homeCountersCount]}>584</BoldText>
                            <LightText style={[styles.whiteText]}>Events</LightText>
                        </View>
                        <View style={[styles.homeCounterItem]}>
                            <BoldText style={[styles.whiteText, styles.homeCountersCount]}>108</BoldText>
                            <LightText style={[styles.whiteText]}>Communities</LightText>
                        </View>
                    </View>
                </ImageBackground>

                {/* Video wrapper */}
                <View style={styles.homeVideoWrapper}>
                    <Image source={require('../../../assets/images/video.jpg')} style={styles.videoWrapperImage} />
                </View>

                {/* Services */}
                <View>
                    <View style={[styles.mtLg, styles.mbLg, { alignItems: 'center' }]}>
                        <BoldText style={styles.homeHeadingTop}>SERVICES</BoldText>
                        <BoldText style={[styles.homeHeading, styles.darkText, styles.mbMd]}>Our Latest Services</BoldText>
                        <RegularText style={[styles.textCenter, styles.ph20]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</RegularText>
                    </View>

                    <View>
                        {servicesData.map((service, i) => {
                            return <ServicesCard key={i} title={service.title} desc={service.desc} />
                        })}
                    </View>
                </View>

                {/* Blog */}
                <View>
                    <View style={[styles.mtMd, styles.mbLg, { alignItems: 'center' }]}>
                        <BoldText style={styles.homeHeadingTop}>OUR BLOG</BoldText>
                        <BoldText style={[styles.homeHeading, styles.darkText, styles.mbMd]}>Our Weekly Blog</BoldText>
                        <RegularText style={[styles.textCenter, styles.ph20]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</RegularText>
                    </View>

                    <View>
                        <FlatListSlider
                            data={blogData}
                            timer={4000}
                            component={<BlogItem />}
                            onPress={item => alert(JSON.stringify(item))}
                            indicatorActiveWidth={25}
                            indicatorActiveColor={COLORS.primary}
                            indicatorInActiveColor={COLORS.dark}
                            indicatorActiveWidth={12}
                            indicatorActiveHeight={10}
                            animation
                            autoscroll={false}
                        />
                    </View>
                </View>

                {/* Feedback */}
                <View style={[styles.mtMd]}>
                    <View style={[styles.mtMd, styles.mbLg, { alignItems: 'center' }]}>
                        <BoldText style={styles.homeHeadingTop}>OUR AFFILIATES</BoldText>
                        <BoldText style={[styles.homeHeading, styles.darkText, styles.mbMd]}>Feedback From Clients</BoldText>
                        <RegularText style={[styles.textCenter, styles.ph20]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</RegularText>
                    </View>

                    <View>
                        <FlatListSlider
                            data={feedbackData}
                            timer={4000}
                            component={<FeedbackItem />}
                            indicatorActiveWidth={25}
                            indicatorActiveColor={COLORS.primary}
                            indicatorInActiveColor={COLORS.dark}
                            indicatorActiveWidth={12}
                            indicatorActiveHeight={10}
                            animation
                            autoscroll={false}
                        />
                        {/* <Carousel
                        layout={'stack'} layoutCardOffset={`18`}
                            // layout="default"
                            ref={_carousel}
                            data={feedbackData}
                            sliderWidth={WINDOW_WIDTH}
                            itemWidth={WINDOW_WIDTH}
                            renderItem={FeedbackItem}
                            onSnapToItem={(index) => setActiveIndex(index)}
                            // autoplay={true}
                            // loop={true}
                            // autoplayInterval={1000}
                        /> */}
                    </View>
                </View>

                {/* Footer */}
                <View style={[styles.footer, styles.ph20]}>
                    {/* footer sec 1 */}
                    <View>
                        <Image source={require('../../../assets/logo.png')} style={styles.footerLogo} />
                        <RegularText>హిందూ ధర్మరక్షణ , భారతదేశ రక్షణే హైందవశక్తి ధ్యేయం</RegularText>
                        <View style={[styles.row, styles.mtMd]}>
                            <Ionicon name="md-call-sharp" size={20} color={COLORS.red} style={{ position: 'absolute', top: 0, left: 0 }} />
                            <RegularText style={styles.plLg}>9246730838</RegularText>
                        </View>
                        <View style={[styles.row, styles.mtMd]}>
                            <Mdicon name="map-marker" size={20} color={COLORS.red} style={{ position: 'absolute', top: 0, left: 0 }} />
                            <RegularText style={styles.plLg}>D.No. 9-11-76, Kakumanu vari Street, Near Maha Lakshmi Temple, Guntur, Guntur District.</RegularText>
                        </View>
                        <View style={[styles.row, styles.mtMd]}>
                            <Mdicon name="email" size={20} color={COLORS.red} style={{ position: 'absolute', top: 0, left: 0 }} />
                            <RegularText style={styles.plLg}>haindavasakthi@gmail.com</RegularText>
                        </View>
                    </View>

                    {/* footer sec 2 */}
                    <View style={styles.mtLg}>
                        <BoldText style={[styles.fs22, styles.blackText]}>Quick Links</BoldText>
                        <View>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>About Us</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>Contact Us</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>News</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>Donations</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>Videos</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>Services</RegularText>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mtMd}>
                                <RegularText style={[styles.fs16, styles.blackText]}>Shop</RegularText>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* footer sec 3 */}
                    <View style={styles.mtLg}>
                        <BoldText style={[styles.fs22, styles.blackText]}>Upcoming Events</BoldText>
                        <View style={styles.mtMd}>
                            <TouchableOpacity style={styles.mbSm}>
                                <RegularText style={[styles.fs18, styles.blackText]}>Shivratri</RegularText>
                            </TouchableOpacity>
                            <RegularText style={[styles.redText, styles.fs14]}>March 11 @ 10:00 am to 12 pm</RegularText>
                        </View>
                        <View style={styles.mtMd}>
                            <TouchableOpacity style={styles.mbSm}>
                                <RegularText style={[styles.fs18, styles.blackText]}>Holy Gathering</RegularText>
                            </TouchableOpacity>
                            <RegularText style={[styles.redText, styles.fs14]}>March 28 @ 10:00 am to 12 pm</RegularText>
                        </View>
                        <View style={styles.mtMd}>
                            <TouchableOpacity style={styles.mbSm}>
                                <RegularText style={[styles.fs18, styles.blackText]}>Ugadi</RegularText>
                            </TouchableOpacity>
                            <RegularText style={[styles.redText, styles.fs14]}>April 13 @ 10:00 am to 12 pm</RegularText>
                        </View>
                        <View style={styles.mtMd}>
                            <TouchableOpacity style={styles.mbSm}>
                                <RegularText style={[styles.fs18, styles.blackText]}>Srirama Navami</RegularText>
                            </TouchableOpacity>
                            <RegularText style={[styles.redText, styles.fs14]}>April 21 @ 10:00 am to 12 pm</RegularText>
                        </View>
                    </View>

                    {/* footer sec 4 */}
                    <View style={styles.mtLg}>
                        <BoldText style={[styles.fs22, styles.blackText]}>Follow Us</BoldText>
                        <View style={[styles.mtMd, styles.row]}>
                            <Image source={require('../../../assets/images/follow1.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                            <Image source={require('../../../assets/images/follow2.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                            <Image source={require('../../../assets/images/follow3.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                            <Image source={require('../../../assets/images/follow4.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                            <Image source={require('../../../assets/images/follow5.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                            <Image source={require('../../../assets/images/follow6.jpg')} style={{ width: '33%', marginBottom: 20 }} />
                        </View>
                    </View>

                    {/* footer sec 5 */}
                    <View style={[styles.mtMd, styles.row, styles.selfCenter]}>
                        <TouchableOpacity style={styles.footerSocialLink}>
                            <Ionicon name="logo-facebook" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerSocialLink}>
                            <Ionicon name="ios-paper-plane-sharp" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerSocialLink}>
                            <Ionicon name="logo-youtube" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerSocialLink}>
                            <Ionicon name="logo-whatsapp" size={30} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>

                    {/* footer sec 5 */}
                    <View style={[styles.mtMd, styles.row, styles.selfCenter]}>
                        <RegularText>© Haindava Sakthi 2021 Allright Reserved</RegularText>
                    </View>

                </View>

                {/* bottom view */}
                <View style={{ height: 90 }}></View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
