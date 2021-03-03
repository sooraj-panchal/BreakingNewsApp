import React, { useEffect } from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryColor } from '../../assets/colors';
import * as globals from '../../utils/globals';
import Loader from '../Loader';
import ModalLoader from '../Loader/ModalLoader';
import Toast from 'react-native-simple-toast';

const MainContainer = ({
    children,
    loading,
    absolute,
    absoluteLoading,
    loaderTop,
    modalLoader,
    statusBarBg,
    style
}) => {
    const insets = useSafeAreaInsets()

    useEffect(() => {
        if (globals.toastMessage) {
            // alert(globals.toastMessage)
            Toast.show(globals.toastMessage, Toast.LONG)
            globals.toastMessage = ""
        }
    }, [globals.toastMessage])

    const absoluteLoadingContainer = () => {
        if (absoluteLoading) {
            if (modalLoader) return <ModalLoader />
            else return <Loader absolute={true} />
        }
    }
    const loadingContainer = () => {
        if (loading) {
            if (modalLoader) {
                return (
                    <ModalLoader />
                )
            } else {
                return (
                    <Loader absolute={absolute} loaderTop={loaderTop} />
                )
            }
        } else {
            return children
        }
    }
    return (
        <View
            style={[{
                flex: 1,
                backgroundColor: "#f2f2f2",
                // paddingTop: insets.top,
                // marginBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                // marginBottom: getBottomSpace()
            }, style]}>
            { loadingContainer()}
            {/* {Platform.OS === "ios" && <SafeAreaView style={{ backgroundColor: statusBarBg ? statusBarBg : PrimaryColor }} />} */}
            {/* {children} */}
            {/* {error ? <ErrorView /> : children} */}
            {/* {(absoluteLoading) && <Loader absolute={true}
                // animating={absoluteLoading}
                />} */}
            {absoluteLoadingContainer()}
        </View>
    );

    // if (form)
    //     return (
    //         <KeyboardAwareScrollView
    //             contentContainerStyle={Style.safeAreaContainer}
    //             viewIsInsideTabBar>
    //             {_renderContainer()}
    //         </KeyboardAwareScrollView>
    //     );
};

export default MainContainer;
