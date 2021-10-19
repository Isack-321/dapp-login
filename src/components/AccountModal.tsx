import{Box,
    Button,
    Flex,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text} from "@chakra-ui/react";
import {ExternalLinkIcon,CopyIcon,} from "@chakra-ui/icons";
import {useEthers} from "@usedapp/core";
import Identicon from "./Identicon"



 type props={
     isOpen:any;
     onClose: any;
 };

export default function AccountModal({ isOpen, onClose }: props){

const {account, deactivate}= useEthers();


function handleDeactivateAccount() {
    deactivate();
    onClose();
  }

return(
<Modal isOpen={isOpen} onClose={onClose} isCentered size="md">

    <ModalOverlay/>

    <ModalContent

    background ="gray.900"
    border="1px"
    borderStyle="solid"
    borderColor="gray.700"
    borderRadius="3x1"
>
    <ModalHeader color="white" px={4} fontSize="lg" fontweight="medium">
        Account
    </ModalHeader>
    <ModalCloseButton color="white" fontsize="sm" _hover={{
        color:"whiteAlpha.700",
    }}/>
    <ModalBody pt={0} px={4}>
        <Box
        bodyRadius="3x1"
        border="1px"
        borderStyle="solid"
        borderColor="gray.600"
        px={5}
        pt={4}
        pb={2}
        mb={3}
        >
            <Flex justifyContent="space-between" alignItems="center" mb={3}
            >
                <Text color="gray.400" fontSize="sm">
                    Connected with metamask
                </Text>
                <Button
                    variant="outline"
                    size="sm"
                    borderColor="blue.800"
                    borderRadius="3x1"
                    color= "blue.500"
                    fontSize="13px"
                    fontWeight="normal"
                    px={2}
                    height="26px"
                    _hover={{
                        background:"none",
                        borderColor:"blue.300",
                        textDecoration:"underline"
                    }}
                    onClick={handleDeactivateAccount}
                    >Change</Button>

            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
                    <Identicon/>
                    <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="semibold"
                    ml="2"
                    lineHeight="1.1"
                    
                    
                    >
                        {account && `${
                            account.slice(0,6)}...${account.slice(account.length-4,
                            account.length 
                                )}`
                        }

                    </Text>

            </Flex>
            <Flex
            alignContent="center" m={3}
            >
                <Button
                
                variant="link"
                color="gray.400"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                    textDecoration:"none",
                    color:"whiteAlpha.800",
                }}
                
                >
                    <CopyIcon mr={1}/>
                    Copy Address
                </Button>

                <Link
                fontSize="sm"
                display="flex"
                alignment="center"
                href={`https://ropsten.etherscan.io/address/${account}`}
                isExternal
                color="gray.400"
                m1={6}
                _hover={{
                    color:"whiteAlpha.800",
                    textDecoration:"underline"
                }}

                >

                <ExternalLinkIcon mr={1}/>
                    View on Explorer
                </Link>

            </Flex>
        </Box>
    </ModalBody>

    <ModalFooter
    justifyContent="end"
    background="gray.700"
    borderBottomLeftRadius="3x1"
    borderBottomRightRadius="3x1"
    p={6}
    
    >

                <Text
                
                color="white"
                textAlign="left"
                fontWeight="medium"
                fontSize="md"

                >your transactions will appear here...</Text>


    </ModalFooter>

</ModalContent>

</Modal>

);

}