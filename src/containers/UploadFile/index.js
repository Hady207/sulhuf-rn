import React, {useState} from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Button, Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Container} from '@components/atoms';
import {useDispatch} from 'react-redux';
import {UploadActions} from './reducer';
import uploadSelectors from './selectors';

const UploadFile = () => {
  const [file, setFile] = useState();
  const {isLoading, successMessage} = useSelector(uploadSelectors);
  const dispatch = useDispatch();

  const handleDocumentPress = async () => {
    try {
      const data = await DocumentPicker.pickSingle();
      setFile(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDocumentUpload = () => {
    dispatch(UploadActions.uploadReq(file));
  };

  return (
    <Container>
      <View style={styles.container}>
        <Pressable style={{marginBottom: 20}} onPress={handleDocumentPress}>
          <Icon name="upload" type="ant-design" />
          {file?.name ? (
            <Text>{file?.name}</Text>
          ) : (
            <Text>Press to select a file</Text>
          )}
        </Pressable>
        <Button
          onPress={handleDocumentUpload}
          title="Upload"
          disabled={!file}
          loading={isLoading}
        />
        {successMessage && <Text>{successMessage}</Text>}
      </View>
    </Container>
  );
};

export default UploadFile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
