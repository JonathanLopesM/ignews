import {query as q} from 'faunadb'

import { fauna } from "../../../services/fauna"
import { stripe } from '../../../services/stripe'

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
) {
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )
                    //buscando todos os dados
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
            //salvando os dados principais
                    const subscriptionData = {
                        id:subscription.id,
                        userId: userRef,
                        status: subscription.status,
                        price_id: subscription.items.data[0].price.id
                    }
                    //salvando todos os dados
                    await fauna.query(
                        q.Create(
                            q.Collection('subscriptions'),
                            { data: subscriptionData }
                        )
                    )
}
