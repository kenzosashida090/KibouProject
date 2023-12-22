import { Layout, Button, Text, Card, Modal } from "@ui-kitten/components";
import React, { FC } from "react";

import { StyleSheet } from "react-native";

interface ErrorCardProps {
  setDisabled: any;
  disabled: boolean;
  message: string;
}

const ErrorCard: FC<ErrorCardProps> = ({ setDisabled, disabled, message }) => {
  return (
    <Layout style={styles.errorContainer}>
      <Modal
        style={styles.errorContainer}
        visible={disabled}
        backdropStyle={styles.backdrop}
      >
        <Card disabled={true} status="warning" style={styles.errorContainer}>
          <Text category="h1">Error</Text>
          <Text category="s1">{message}</Text>
          <Button
            status="danger"
            style={styles.errorButton}
            onPress={() => setDisabled(false)}
          >
            Continuar
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
};
const styles = StyleSheet.create({
  errorContainer: {
    borderRadius: 10,
  },
  errorButton: {
    borderRadius: 20,
    marginVertical: 10,
    color: "#fff",
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
export default ErrorCard;
