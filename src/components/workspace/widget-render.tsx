import { FC, forwardRef, MutableRefObject, useRef, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import {
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { log } from "@lib/logger";
import { Option } from "@lib/Widget";
import { HideOptionsState } from "@store/Workspace";

interface OptionFormProps {
    firstFieldRef: MutableRefObject<any>;
    onCancel: () => void;
    options: Array<Option>;
}

const OptionsForm: FC<OptionFormProps> = ({ firstFieldRef, onCancel, options }) => {
    const [loading, setLoading] = useState(false);

    const saveSettings = async () => {
        setLoading(true);
        const data = new Promise((res) => setTimeout(() => res("HTTP / 200 OK"), 1000));
        const result = await data;
        setLoading(false);
        return result;
    };

    const OptionsInput = forwardRef<any, { id: string; label: string }>(function OptionInput({ id, label }, ref) {
        return (
            <FormControl>
                <FormLabel htmlFor={id}>{label}</FormLabel>
                <Input ref={ref} id={id} type={label == "password" ? "password" : ""} />
            </FormControl>
        );
    });

    return (
        <Stack spacing={4}>
            {options.map((o, key) => (
                <OptionsInput
                    label={o}
                    id={o + "-options"}
                    key={o + key + "key"}
                    ref={key == 0 ? firstFieldRef : null}
                />
            ))}
            <ButtonGroup d="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button colorScheme="teal" isLoading={loading} onClick={saveSettings}>
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    );
};

export const OptionsPopOver: FC<{ options: string[] }> = ({ options }) => {
    log("Options for widget: ", options);
    const { onOpen, onClose, isOpen } = useDisclosure();
    const firstFieldRef = useRef(null);
    const hide = useRecoilValue(HideOptionsState);

    if (hide) return <></>;
    return (
        <Popover
            isOpen={isOpen}
            initialFocusRef={firstFieldRef}
            onOpen={onOpen}
            onClose={onClose}
            placement="right"
            closeOnBlur={true}
        >
            <PopoverTrigger>
                <IconButton size="sm" icon={<EditIcon />} background={"transparent"} aria-label={"widget-options"} />
            </PopoverTrigger>
            <PopoverContent p={5}>
                <PopoverArrow />
                <PopoverCloseButton />
                <OptionsForm firstFieldRef={firstFieldRef} onCancel={onClose} options={options} />
            </PopoverContent>
        </Popover>
    );
};
