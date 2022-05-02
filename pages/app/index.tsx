import { Row, Text } from '@nextui-org/react'
import { AppLayout, AppPageAppBar, AppPageContainer } from 'components'

const AppHomePage = () => {
    return (
        <>
            <AppPageAppBar title="Home" />
            <AppPageContainer>
                <Row gap={1}>
                    <Text>saf</Text>
                </Row>
            </AppPageContainer>
        </>
    )
}

AppHomePage.getLayout = (page: React.ReactElement) => {
    return <AppLayout>{page}</AppLayout>
}

export default AppHomePage
