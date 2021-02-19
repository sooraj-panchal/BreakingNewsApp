import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loader from '../Loader';
import ModalLoader from '../Loader/ModalLoader';

const MainContainer = ({
    children,
    loading,
    absolute,
    absoluteLoading,
    loaderTop,
    modalLoader,
    style
}) => {
    const insets = useSafeAreaInsets()


    // useEffect(() => {
    //     // alert(globals.successMessage)
    //     if (globals.successMessage) {
    //         // setSuccessMessage(globals.successMessage)
    //         // ToastAndroid.showWithGravityAndOffset(
    //         //     globals.successMessage,
    //         //     ToastAndroid.LONG,
    //         //     ToastAndroid.BOTTOM,
    //         //     25,
    //         //     200
    //         // );
    //         // 
    //         Toast.show(globals.successMessage, Toast.LONG);
    //         globals.successMessage = ""
    //     }
    //     if (globals.errorMessage) {
    //         // setErrorMessage(globals.errorMessage)
    //         // ToastAndroid.showWithGravityAndOffset(
    //         //     globals.errorMessage,
    //         //     ToastAndroid.LONG,
    //         //     ToastAndroid.BOTTOM,
    //         //     25,
    //         //     50
    //         // );
    //         Toast.show(globals.errorMessage, Toast.LONG);
    //         globals.errorMessage = ""
    //     }
    // }, [globals.successMessage, globals.errorMessage])

    const absoluteLoadingContainer = () => {
        if (absoluteLoading) {
            if (modalLoader) return <ModalLoader />
            else return <Loader absolute={true} />
        }
    }
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
    }

    return (
        <View
            style={[{
                flex: 1,
                backgroundColor: "transparent",
                // paddingTop: insets.top,
                // marginBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                // paddingTop: getStatusBarHeight(),
                // marginBottom: getBottomSpace()
            },style]}>
            {children}
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
