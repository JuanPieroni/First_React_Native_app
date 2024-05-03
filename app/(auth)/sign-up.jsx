import { View, Text, ScrollView, Image } from "react-native"
import { React, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../../constants"
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import { Link } from "expo-router"

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        Username: "",
        password: "",
    })
    const [isSubmiting, setIsSubmiting] = useState(false)
    const submit = () => {}
    return (
        <>
            <SafeAreaView className="bg-primary h-full">
                <ScrollView>
                    <View className="w-full justify-center min-h[83vh] px-4 my-6">
                        <Image
                            source={images.logo}
                            className="w-[115px] h-[35px]"
                            resizeMode="contain"
                        />
                        <Text className="text-white  text-2xl text-semibold mt-10 font-psemibold">
                            Sign Up to Aora
                        </Text>
                        <FormField
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) =>
                                setForm({ ...form, email: e })
                            }
                            otherStyles="mt-7"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Username"
                            value={form.username}
                            handleChangeText={(e) =>
                                setForm({ ...form, username: e })
                            }
                            otherStyles="mt-7"
                        />

                        <FormField
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) =>
                                setForm({ ...form, password: e })
                            }
                            otherStyles="mt-7"
                        />
                        <CustomButton
                            title="Sign In"
                            handlePress={submit}
                            containerStyles="mt-7"
                            isLoading={isSubmiting}
                        />
                        <View className="justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-gray-100 font-pregular">
                                Don't Have an account?
                            </Text>
                            <Link
                                href="/sign-up"
                                className="text-lg font-psemibold text-secondary"
                            >
                                Sign Up
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SignUp
