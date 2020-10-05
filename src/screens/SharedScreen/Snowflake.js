import React, { Component } from 'react';
import { View } from 'react-native';
import { SnowflakeItemCard } from '../../components/cards';
import { SecondaryBgView, SecondaryHeader } from '../../components/Layouts';

class Snowflake extends Component {
    render() {
        return (
            <SecondaryBgView>
                <SecondaryHeader.Back title="Snowflake" onBackPress={this.props.navigation.goBack} />
                <View
                    style={{
                        flex: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        marginTop: "10%",
                    }}
                >
                    <SnowflakeItemCard value="Hydro Token Address" onPress={() => this.props.navigation.navigate("hydrotokenaddress")} />
                    <SnowflakeItemCard value="Identity Registry Address" onPress={() => this.props.navigation.navigate("identityregistryaddress")} />
                    <SnowflakeItemCard value="Deposits" onPress={() => this.props.navigation.navigate("deposits")} />
                    <SnowflakeItemCard value="Transfer Snowflake Balance" onPress={() => this.props.navigation.navigate("transfersnowflakebalance")} />
                    <SnowflakeItemCard value="Withdraw Snowflake Balance" onPress={() => this.props.navigation.navigate("withdrawsnowflakebalance")} />

                    <SnowflakeItemCard value="Transfer Snowflake Balance From" onPress={() => this.props.navigation.navigate("transfersnowflakebalancefrom")} />
                    <SnowflakeItemCard value="Withdraw Snowflake Balance From" onPress={() => this.props.navigation.navigate("withdrawsnowflakebalancefrom")} />

                    <SnowflakeItemCard value="Transfer Snowflake Balance From Via" onPress={() => this.props.navigation.navigate("transfersnowflakebalancefromvia")} />
                    <SnowflakeItemCard value="Withdraw Snowflake Balance From Via" onPress={() => this.props.navigation.navigate("withdrawsnowflakebalancefromvia")} />

                </View>
            </SecondaryBgView>
        );
    }
}

export default Snowflake;