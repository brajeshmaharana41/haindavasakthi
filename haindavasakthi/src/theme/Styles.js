import { Dimensions, StyleSheet } from "react-native"
import { SPACES, SIZES, COLORS, WINDOW_WIDTH, WINDOW_HEIGHT } from "./Theme"

const styles = StyleSheet.create({
    container: { padding: SPACES },
    flex1: { flex: 1 }, flex2: { flex: 2 },
    vhCenter: { alignItems: 'center', justifyContent: 'center' },
    row: { flexDirection: 'row', flexWrap: 'wrap' }, spaceBetween: { justifyContent: 'space-between' },
    bgWhite: { backgroundColor: COLORS.white },
    fullScreen: { ...StyleSheet.absoluteFillObject, width: WINDOW_WIDTH, height: WINDOW_HEIGHT },
    shadow: {
        shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1 },
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white
    },
    imageFluid: { width: '100%', resizeMode: 'contain' },
    overlay: { position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: COLORS.black, opacity: 0.27 },
    darkOverlay: { opacity: 0.63 },
    textCenter: { textAlign: 'center' },
    selfCenter: { alignSelf: 'center' },
    itemsCenter: { alignItems: 'center' },

    // Typogarphy
    bold: { fontWeight: 'bold' },
    whiteText: { color: COLORS.white },
    blackText: { color: COLORS.black },
    darkText: { color: COLORS.dark },
    lightText: { color: COLORS.light },
    redText: { color: COLORS.red },
    smallText: { fontSize: SIZES.sm + 3 },

    // Spaces
    mtSm: { marginTop: SIZES.sm }, mtMd: { marginTop: SIZES.md }, mtLg: { marginTop: SIZES.lg },
    mbSm: { marginBottom: SIZES.sm }, mbMd: { marginBottom: SIZES.md }, mbLg: { marginBottom: SIZES.lg },
    mlMd: { marginLeft: SIZES.md },
    ph20: { paddingHorizontal: 20 },
    plMd: { paddingLeft: SIZES.md }, plLg: { paddingLeft: SIZES.lg },

    // Font sizes
    fs10: { fontSize: 10 }, fs12: { fontSize: 12 }, fs14: { fontSize: 14 }, fs16: { fontSize: 16 }, fs18: { fontSize: 18 },
    fs20: { fontSize: 20 }, fs22: { fontSize: 22 }, fs26: { fontSize: 26 }, fs30: { fontSize: 30 },

    // Header styles
    headerWrapper: { backgroundColor: COLORS.primary, height: 60, width: WINDOW_WIDTH, alignItems: 'center', flexDirection: 'row' },

    // Home Screen styles
    itemWrapper: { width: WINDOW_WIDTH, height: WINDOW_HEIGHT / 3.2, flexWrap: 'wrap' },
    aboutItemWrapper: { width: WINDOW_WIDTH, flexWrap: 'wrap' },
    itemHeader: { fontSize: SIZES.lg - 9, color: COLORS.white },
    itemDesc: { color: COLORS.white, marginHorizontal: 15, textAlign: 'center', marginVertical: 15 },
    itemBtn: { backgroundColor: COLORS.white, paddingHorizontal: 25, paddingVertical: 7 },
    itemBtnText: { color: COLORS.dark },
    bannerIndicators: { position: 'absolute', bottom: 20 },
    homeIcon: { width: WINDOW_WIDTH / 5, resizeMode: 'contain' },
    homeHeading: { fontSize: SIZES.lg - 3, fontWeight: 'bold', alignSelf: 'center' },
    homeHeadingTop: { fontSize: SIZES.lg - 10, color: COLORS.primary },
    homeSubHeading: { fontSize: SIZES.lg - 12, alignSelf: 'center' },
    homeAboutWrapper: { backgroundColor: COLORS.white, paddingTop: 20, paddingBottom: 45 },
    homeAboutIndicators: { position: 'absolute', bottom: -10 },
    homeCounterItem: { width: WINDOW_WIDTH / 4, alignItems: 'center' },
    homeCountersCount: { fontSize: SIZES.lg - 3 },
    homeCountersInner: { paddingBottom: SIZES.xl + 10 },
    homeVideoWrapper: { backgroundColor: COLORS.white, height: WINDOW_HEIGHT / 5, alignItems: 'center' },
    videoWrapperImage: { height: WINDOW_HEIGHT / 4.5, width: WINDOW_WIDTH / 1.25, resizeMode: 'contain', position: 'absolute', top: -70 },
    serviceCard: { padding: 15, width: WINDOW_WIDTH - 40, marginLeft: 20 },
    homeBlogItemWrap: { width: WINDOW_WIDTH, borderRadius: 4, paddingHorizontal: 20 },
    homeBlogImage: { width: WINDOW_WIDTH - 40, borderTopLeftRadius: 3, borderTopRightRadius: 3, backgroundColor: '#333' },
    homeBlogItemContent: { padding: 15, top: -5, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
    homeBlogItemType: { backgroundColor: COLORS.ternery, paddingHorizontal: 15, paddingVertical: 7, fontSize: SIZES.md, alignSelf: 'flex-start', color: COLORS.white, top: -30 },
    homeBlogItemContentInner: { top: -15 },
    homeBlogItemTitle: { fontSize: SIZES.lg - 10 },
    homeFeedbackItemWrap: {
        paddingHorizontal: 15, marginHorizontal: 20, width: WINDOW_WIDTH - 40,
        marginBottom: 0, paddingVertical: 0,
        alignSelf: 'flex-start', paddingBottom: 0
    },
    homeFeedbackItemInner: {
        paddingVertical: 20, backgroundColor: COLORS.white, borderColor: COLORS.ternery, borderWidth: 3,
        marginBottom: 40,
    },
    homeFeedbackImage: { height: 70, width: 70, top: 50, borderRadius: 100 },
    footerLogo: { height: 70, resizeMode: 'contain', left: -15 },
    footerSocialLink: { marginRight: 20 },

    // Form styles
    input: {
        paddingHorizontal: 15, color: COLORS.dark, marginBottom: SIZES.md + 2,
        borderWidth: 1, borderColor: '#ddd', width: WINDOW_WIDTH - 80, height: 50,
        borderRadius: SIZES.sm, shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1 },
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white, fontFamily: 'NunitoSans-Regular'
    },
    inputView: {
        marginBottom: SIZES.md + 2,
        borderWidth: 1, borderColor: '#ddd', width: WINDOW_WIDTH - 80, height: 50,
        borderRadius: SIZES.sm, shadowColor: COLORS.black, shadowOpacity: 0.27, shadowOffset: { width: 0, height: 1 },
        shadowRadius: SIZES.sm, elevation: 3, backgroundColor: COLORS.white
    },
    viewInput: {
        paddingHorizontal: 15, color: COLORS.dark, fontFamily: 'NunitoSans-Regular',
        borderRadius: SIZES.sm, backgroundColor: COLORS.white
    },
    inputViewBtn: { position: 'relative', right: 15, top: -36, elevation: 9, alignSelf: 'flex-end' },

    // Buttons styles
    btn: { borderColor: COLORS.light, borderWidth: 1, borderRadius: SIZES.sm, paddingVertical: SIZES.md },
    btnBlock: { width: WINDOW_WIDTH - 80 },
    btnPrimary: { borderWidth: 0, backgroundColor: COLORS.primary },
    btnLogin: { width: WINDOW_WIDTH - 80, justifyContent: 'center', alignItems: 'center' },
    btnPrimaryText: { color: COLORS.white, fontWeight: 'bold' },
    link: {},
    linkText: { color: COLORS.dark, fontWeight: 'bold' },

    // Checkbox styles
    checkbox: { width: 20, height: 20, borderWidth: 1, borderRadius: 4, marginRight: 15 },

    // Login styles
    loginWrapper: { paddingHorizontal: 40 },
    loginLogo: { width: 250, resizeMode: 'contain', marginBottom: SIZES.lg },
    loginHeading: { fontSize: SIZES.md + 3, alignSelf: 'flex-start', marginBottom: SIZES.md + 5, color: COLORS.dark },
    fpWrap: { alignSelf: 'flex-end', marginBottom: SIZES.md },

    // Signup styles

    // dashboard styles
    dashboardWrapper: { height: WINDOW_HEIGHT - 90, width: WINDOW_WIDTH },

    // Map styles    
    map: { ...StyleSheet.absoluteFillObject },

    // Home styles


})

export default styles