import { SectionList, View, Text } from "react-native";
import { documentStyles } from "../util/style";

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

  function renderItem({item}) {
    return <>
            <View style={documentStyles.viewMenuItem}>
                <Text style={documentStyles.menuItem}>{item.name}</Text>
                <Text style={documentStyles.menuItem}>{item.price}</Text>
            </View>
            </>
}

const Separator = () => <View style={documentStyles.separator} />
const ListHeader = () => <Text style={documentStyles.welcomeTitle}>SectionList Example</Text>
const ListFooter = () => <Text style={documentStyles.welcomeTitle}>Price List and Menu have the latest prices.</Text>
const renderSectionHeader = ({ section: { title } }) => (
    <Text style={documentStyles.sectionTitle}>{title}</Text>
  );
  
export default function SectionItems() {
    return <View style={documentStyles.sectionContainer}>
        <SectionList
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={ListFooter}
            ListHeaderComponent={ListHeader}
            ItemSeparatorComponent={Separator}
        />
    </View>
}