import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import profiles from './data2';

const sWidth = Dimensions.get("window").width;
const sHeight = Dimensions.get("window").height;

export default function App() {
  const filteredList = profiles.filter(item => item.userType === 'Student');

  const Item = ({ item }) => {
    return (
      <DataTable.Row style={styles.tBorder}>
        <DataTable.Cell>{item.id}</DataTable.Cell>
        <DataTable.Cell>{item.name.firstName} {item.name.lastName}</DataTable.Cell>
        <DataTable.Cell>{item.course}</DataTable.Cell>
      </DataTable.Row>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tableContainer}>
          <DataTable>
            {/* Accounts Table */}
            <DataTable.Header>
              <DataTable.Title style={styles.tableTitle}>
                <Text style={styles.tableTitleText}>Accounts</Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title><Text style={styles.columnHeader}>ID</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Username</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Password</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>User Type</Text></DataTable.Title>
            </DataTable.Header>
            {profiles.map((list) => (
              <DataTable.Row style={styles.tableRow} key={list.id}>
                <DataTable.Cell>{list.id}</DataTable.Cell>
                <DataTable.Cell>{list.userName}</DataTable.Cell>
                <DataTable.Cell>{list.password}</DataTable.Cell>
                <DataTable.Cell>{list.userType}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>

        {/* Users Table */}
        <View style={styles.tableContainer}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.tableTitle}>
                <Text style={styles.tableTitleText}>Users</Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title><Text style={styles.columnHeader}>ID</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>First Name</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Last Name</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Year and Section</Text></DataTable.Title>
            </DataTable.Header>
            {profiles.map((list) => (
              <DataTable.Row style={styles.tableRow} key={list.id}>
                <DataTable.Cell>{list.id}</DataTable.Cell>
                <DataTable.Cell>{list.name.firstName}</DataTable.Cell>
                <DataTable.Cell>{list.name.lastName}</DataTable.Cell>
                <DataTable.Cell>{list.yearSection}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>

        {/* Students Table */}
        <View style={styles.tableContainer}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.tableTitle}>
                <Text style={styles.tableTitleText}>Students</Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title><Text style={styles.columnHeader}>ID</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Name</Text></DataTable.Title>
              <DataTable.Title><Text style={styles.columnHeader}>Course</Text></DataTable.Title>
            </DataTable.Header>
            <FlatList
              data={filteredList}
              renderItem={Item}
              keyExtractor={item => item.id} />
          </DataTable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D5FF', // Background color: Light purple
    padding: 20,
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableTitle: {
    justifyContent: 'center',
  },
  tableTitleText: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003366', // Dark blue
  },
  tableHeader: {
    backgroundColor: '#FF85A2', // Light pink
  },
  tableRow: {
    borderWidth: 1,
    borderColor: '#003366', // Dark blue
  },
  columnHeader: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003366', // Dark blue
  },
});
