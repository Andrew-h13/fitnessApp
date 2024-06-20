/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Formik} from 'formik';
import {basicSchema} from './schemas';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={basicSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {({handleChange, handleBlur, values, errors, touched}) => (
          <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={[
                styles.input,
                touched.username && errors.username ? styles.errorInput : null,
              ]}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={[
                styles.input,
                touched.email && errors.email ? styles.errorInput : null,
              ]}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={[
                styles.input,
                touched.password && errors.password ? styles.errorInput : null,
              ]}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              style={[
                styles.input,
                touched.confirmPassword && errors.confirmPassword
                  ? styles.errorInput
                  : null,
              ]}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.link}>
              <Text style={styles.linkText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
