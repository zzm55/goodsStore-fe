import { View, Text, Image, Input } from "@tarojs/components";
import useRecordTypeStore from "../../store/records";

const RecordDetailList = (props: any) => {
  const { Id } = props;

  const recordsList = useRecordTypeStore((state) => state.data);
  const index = recordsList.findIndex(({ id }) => id == Number(Id));

  return (
    <>
      {recordsList[index].requests.map((item) => (
        <>
          <View className="things-item">
            <Image src={`${item.picture_url}`} className="things-icon"></Image>
            <View className="things-texts">
              <Text className="things-title">{item.name}</Text>
            </View>
            <View className="things-count">
              <View className="counts">
                <Input
                  className="count-input"
                  disabled
                  value={`${item.amount}`}
                ></Input>
              </View>
              <Text className="things-count-text">{item.measure_word}</Text>
            </View>
          </View>
        </>
      ))}
    </>
  );
};
export default RecordDetailList;
